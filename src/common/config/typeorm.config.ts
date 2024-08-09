import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Member } from '../../members/member.entity';
import { Task } from '../../tasks/task.entity';

export const getTypeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  entities: [Member, Task],
  synchronize: true, // In production, set to false and use migrations
 
});
