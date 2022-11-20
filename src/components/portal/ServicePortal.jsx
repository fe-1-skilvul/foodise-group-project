import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TypoMain } from '../atoms';
import CategoryBar from '../category/CategoryBar';

const ServicePortal = ({ user = ' ' }) => {
  return (
    <Stack className="p-4 shadow-sm p-3 mb-5 bg-body rounded d-flex flex-row justify-content-between align-items-start">
      <TypoMain text="Hii" coloredText={user} />
      <Link to={'/booked'} className="text-decoration-none">
        <Button className="button button-outlined d-none d-md-block">
          Your Foods
        </Button>
      </Link>
      <CategoryBar />
    </Stack>
  );
};

export default ServicePortal;
