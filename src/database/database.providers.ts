import { createConnection } from 'typeorm';

// ======== Conexão Localhost =================
// export const databaseProviders = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: async () =>
//       await createConnection({
//         type: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: 'victor123',
//         database: 'db_eldorado',
//         entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//         synchronize: true,
//       }),
//   },
// ];

// ======== Conexão AWS RDS =================
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'database-1.c4uoqzjv4wv0.sa-east-1.rds.amazonaws.com',
        port: 3306,
        username: 'root',
        password: 'victor123',
        database: 'db_eldorado',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];

// === Comando para conexão ssh na ec2 ===

// Executar no mesmo diretório de "myaws.pem"
// ssh -i "myaws.pem" ubuntu@ec2-18-231-183-53.sa-east-1.compute.amazonaws.com
