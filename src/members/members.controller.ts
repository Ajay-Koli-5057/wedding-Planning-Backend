import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dtos/create-member.dto';
import { UpdateMemberDto } from './dtos/update-member.dto';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  async findAllmember() {
    return this.membersService.findAllMember();
  }

  @Get(':id')
  async findOneMember(@Param('id') id: number) {
    return this.membersService.findOneMember(id);
  }

  @Post()
  async createMember(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.createMember(createMemberDto);
  }

  @Patch(':id')
  async updateMember(@Param('id') id: number, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.updateMember(id, updateMemberDto);
  }

  @Delete(':id')
  async removeMember(@Param('id') id: number) {
    this.membersService.removeMember(id);
    return {
        message: 'Member deleted successfully',
      };
  }
}
