import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(404).json({
      message: 'NOT FOUND',
    });
  }

  if (!Object
      .prototype
      .hasOwnProperty.call(request.body, 'param1') || isNaN(request.body.param1)) {
    return response.status(422).json({
      message: 'invalid param1'
    });
  }

  if (!Object
      .prototype
      .hasOwnProperty.call(request.body, 'param2') || isNaN(request.body.param2)) {
    return response.status(422).json({
      message: 'invalid param2'
    });
  }

  response.status(200).json({
    answer: request.body.param1 + request.body.param2,
  });
}
