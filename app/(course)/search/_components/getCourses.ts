/* eslint-disable react-hooks/rules-of-hooks */
import { useCategorysQuery } from "@/redux/api/categoryApi";

const getCategorys = () => {
  const { data, isLoading } = useCategorysQuery({});

  if (isLoading) return [];

  return data;
};

export default getCategorys;
