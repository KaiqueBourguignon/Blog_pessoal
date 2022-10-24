import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authModule } from './auth/auth.module';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemOrmModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true
    }),
    PostagemOrmModule, TemaModule ,  authModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
