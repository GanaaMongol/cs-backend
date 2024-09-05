import { Delete, Get, Post, Put, applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export const MethodApi = (method: Method, path: string, summary?: string) => {
  switch (method) {
    case Method.GET:
      return summary
        ? applyDecorators(Get(path), ApiOperation({ summary }))
        : applyDecorators(Get(path));
    case Method.POST:
      return summary
        ? applyDecorators(Post(path), ApiOperation({ summary }))
        : applyDecorators(Post(path));
    case Method.PUT:
      return summary
        ? applyDecorators(Put(path), ApiOperation({ summary }))
        : applyDecorators(Put(path));
    case Method.DELETE:
      return summary
        ? applyDecorators(Delete(path), ApiOperation({ summary }))
        : applyDecorators(Delete(path));
    default:
      return;
  }
};
