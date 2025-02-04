import React from "react";
import { Pagination, Stack } from "@mui/material";

type TPaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

export default function CustomPagination({
  totalPages,
  currentPage,
  onPageChange,
}: Readonly<TPaginationProps>) {
  return (
    <Stack spacing={2} alignItems="center" mt={2} mb={2}>
      <Pagination
        className="custom-pagination"
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        variant="outlined"
        shape="rounded"
        boundaryCount={2}
      />
    </Stack>
  );
}
