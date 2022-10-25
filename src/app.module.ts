import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsuarioLogin } from './auth/entities/usuariologin.entity';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemOrmModule } from './postagem/postagem.module';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { Usuario } from './usuario/entities/usuario.entitys';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema , Usuario ],
      synchronize: true
    }),
    PostagemOrmModule, TemaModule ,  AuthModule , UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
