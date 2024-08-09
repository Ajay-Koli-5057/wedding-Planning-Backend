import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';
import { CreateMemberDto } from './dtos/create-member.dto';
import { UpdateMemberDto } from './dtos/update-member.dto';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private membersRepository: Repository<Member>,
  ) {}

  async findAllMember(): Promise<Member[]> {
    
      return this.membersRepository.find();
    
    
  }

  async findOneMember(id: number): Promise<Member> {
   
      const member = await this.membersRepository.findOne({where:{id}});
    if (!member) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }
    return member;
   
    
  }

  async createMember(createMemberDto: CreateMemberDto): Promise<Member> {
  
      const member = this.membersRepository.create(createMemberDto);
      return this.membersRepository.save(member);
   
   
  }

  async updateMember(id: number, updateMemberDto: UpdateMemberDto): Promise<Member> {
    
      await this.findOneMember(id); // Ensure the member exists
      await this.membersRepository.update(id, updateMemberDto);
      return this.findOneMember(id);
    

  }

  async removeMember(id: number): Promise<void> {

      const result = await this.membersRepository.delete(id);
    
      if (result.affected === 0) {
        throw new NotFoundException(`Member with ID ${id} not found`);
      }
    }
  
 
}
