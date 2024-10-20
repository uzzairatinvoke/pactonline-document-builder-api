import { Entity, PrimaryGeneratedColumn, Column, ValueTransformer } from 'typeorm';

// kalau nak handle json transform dekat nestjs app uncomment line 4 sampai 14, tapi jgn lupa uncomment dkt line 25 dan jgn lupa disable json transform dalam nextjs app. Kalau tak disable di nextjs app, nanti akan jadi double string dkt dalam column content di database. Tapi buat masa ni, pakai ni je dulu pn ok.
// const jsonTransformer: ValueTransformer = {
//   to: (value: any) => JSON.stringify(value),
//   from: (value: string) => {
//     try {
//       return JSON.parse(value);
//     } catch (error) {
//       console.error('Failed to parse JSON:', value);
//       return value;
//     }
//   }
// };

@Entity('documents')
export class DocumentTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  // sebab kita nak simpan dlm json. Make sure ni always dalam json.
  @Column(
    'json',
    // {transformer:jsonTransformer}
  ) 
  content: any;
}
