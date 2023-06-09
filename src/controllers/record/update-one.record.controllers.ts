/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { Record } from '../../models';
import { validatePostRecord } from '../../validators';
import message from '../../views/message';

async function updateRecord(req: Request, res: Response) {
  const isId = req.headers['accept-language'] == "id-ID";
  const { error } = validatePostRecord(req.body);
  if (error) {
    return res.status(400).send(
      message({
        statusCode: 400,
        data: req.body,
        message: error.message
      })
    );
  }
  const record = await Record.findById(req.params.RecordId)
  if(!record) {
    return res.status(404).send(message({
      statusCode: 404,
      message: isId ? "Berita tidak ditemukan" : "Record is not found",
      data: req.query
    }))
  }

  record!.weight = req.body.weight || record?.weight
  record!.updatedAt = Date.now() as unknown as Date

  const updatedRecord = await record?.save()
  res.send(message({
    statusCode: 201,
    message: isId ? "Berita berhasil diperbarui" : "Record is successfully updated",
    data: updatedRecord
  }))
}

export { updateRecord };
