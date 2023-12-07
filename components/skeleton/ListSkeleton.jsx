import { Skeleton } from "@mui/material";

export const ListSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="rounded"
        width={366}
        height={60}
        animation="wave"
        style={{ marginBottom: "16px" }}
      />
      <Skeleton
        variant="rounded"
        width={366}
        height={60}
        animation="wave"
        style={{ marginBottom: "16px" }}
      />
      <Skeleton
        variant="rounded"
        width={366}
        height={60}
        animation="wave"
        style={{ marginBottom: "16px" }}
      />
      <Skeleton
        variant="rounded"
        width={150}
        height={60}
        animation="wave"
        style={{ marginBottom: "16px" }}
      />
    </>
  );
};

export default ListSkeleton;
