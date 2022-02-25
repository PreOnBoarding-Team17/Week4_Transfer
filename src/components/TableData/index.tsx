import React from 'react';
import type { FC } from 'react';
import fileSize from 'filesize';
import { DataInterface, FileInterface } from 'common/interface';
import { TableRow } from 'common/styles';
import expireState from 'hooks/useExpired';
import TableDataInfo from 'components/TableData/TableDataInfo';
import TableDataTitle from 'components/TableData/TableDataTitle';

const TEXTS = ['파일개수', '파일사이즈', '유효기간', '받은사람'];

const TableData: FC<DataInterface> = (data: DataInterface) => {
  const expire = expireState(data);

  const dataFileSize = fileSize(
    data.files.reduce((acc: number, cur: FileInterface) => acc + cur.size, 0)
  );

  const tableDataInfoDatas = [
    { count: data.count },
    { fileSize: dataFileSize },
    { expiresAt: data.expires_at },
    { downloadCount: data.download_count },
  ];

  return (
    <TableRow key={data.key}>
      <TableDataTitle
        id={data.key}
        thumbnailUrl={data.thumbnailUrl}
        summary={data.summary}
        expireState={expire}
      />

      {tableDataInfoDatas.map((tableDataInfoData, index) => {
        return (
          <TableDataInfo
            text={TEXTS[index]}
            key={index}
            id={data.key}
            count={tableDataInfoData.count}
            fileSize={tableDataInfoData.fileSize}
            expiresAt={tableDataInfoData.expiresAt}
            downloadCount={
              tableDataInfoData.downloadCount === 0
                ? undefined
                : tableDataInfoData.downloadCount
            }
          />
        );
      })}
    </TableRow>
  );
};

export default TableData;
