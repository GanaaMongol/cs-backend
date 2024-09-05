import { PageOptionsDto } from '../dtos/pagination/page-options.dto';

export interface PageMetaDtoParameters {
  page_options_dto: Partial<PageOptionsDto>;
  item_count: number;
}
