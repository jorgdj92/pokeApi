import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');

@Injectable()
export class AxioslibService {
  async generateRequest(data: { method: string; url: string; data?; params? }) {
    try {
      const request = await axios(data);
      return request.data;
    } catch (error) {
      return error;
    }
  }
}
