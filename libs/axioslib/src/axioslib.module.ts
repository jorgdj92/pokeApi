import { Module } from '@nestjs/common';
import { AxioslibService } from './axioslib.service';

@Module({
  providers: [AxioslibService],
  exports: [AxioslibService],
})
export class AxioslibModule {}
