interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    }
}

export default function Category(props: CategoryProps) {
    console.log(props) // searchParams:
    const { categories } = props.params;
    console.log(categories) // array
  return (
    <div>
      <h1>Category dynamic: {categories}</h1>
    </div>
  );
}