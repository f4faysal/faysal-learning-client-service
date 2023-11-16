/* eslint-disable react-hooks/rules-of-hooks */
import { useCategorysQuery } from "@/redux/api/categoryApi";

const getCategories = () => {
  const { data, isLoading } = useCategorysQuery({});

  return data;
};

export default getCategories;
