import { Stack } from 'react-bootstrap';
import CategoryItem from './CategoryItem';
import { categories } from '../../Services/category';

const Category = () => {
  return (
    <Stack className="d-none d-md-flex flex-row gap-3 align-items-center justify-content-evenly ">
      {categories.map((item, i) => {
        return (
          <CategoryItem
            key={i}
            icon={item.icon}
            name={item.name}
            iconB={item.iconB}
          />
        );
      })}
    </Stack>
  );
};

export default Category;
