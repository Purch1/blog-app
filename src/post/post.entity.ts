import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostStatus, PostType } from './enums/postType.enums';
import { CreatePostMethodOptionsDto } from './dtos/create-post-meta-options.dto';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    nullable: false,
    default: PostType.POST,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: PostStatus,
    length: 256,
    nullable: false,
    default: PostStatus.DRAFT,
  })
  status: PostStatus;

  @Column({
    type: 'text',
    nullable: false,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featureImageUrl?: string;

  @Column({
    type: 'timestamp', //datetime in  mysql
    nullable: true,
  })
  publishOn: Date;

  // Work on these in lectures on relationship
  tags?: string[];

  metaOptions?: CreatePostMethodOptionsDto[];
}
