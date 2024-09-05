import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDtoParameters } from 'src/common/interfaces/page-meta-dto-params';

export class PageMetaDto {
  @ApiProperty()
  readonly page: number;

  @ApiProperty()
  readonly size: number;

  @ApiProperty()
  readonly item_count: number;

  @ApiProperty()
  readonly page_count: number;

  @ApiProperty()
  readonly has_previous_page: boolean;

  @ApiProperty()
  readonly has_next_page: boolean;

  constructor({ page_options_dto, item_count }: PageMetaDtoParameters) {
    this.page = page_options_dto.page;
    this.size = page_options_dto.size;
    this.item_count = item_count;
    this.page_count = Math.ceil(this.item_count / this.size);
    this.has_previous_page = this.page > 1;
    this.has_next_page = this.page < this.page_count;
  }
}
