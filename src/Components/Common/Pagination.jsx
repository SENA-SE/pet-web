import * as React from 'react';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import styled from 'styled-components'

const StyledPagination = styled(Pagination)`
  
  ul {
    justify-content: ${({ right }) => right && "flex-end" || "inherit"};

    & .MuiPaginationItem-root{
      color: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;
function Content({ right, path="adoption", ...rest }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  return (
    <StyledPagination
      page={page}
      count={8}
      right={right}
      {...rest}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/${path}${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}

export default function PaginationLink({ right, ...rest }) {
  return (
    <Routes>
      <Route path="*" element={<Content right={right} {...rest} />} />
    </Routes>

  );
}
