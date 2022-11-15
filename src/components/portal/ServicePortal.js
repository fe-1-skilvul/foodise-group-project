import { Button, Stack } from 'react-bootstrap';
import { TypoMain } from '../atoms';

const ServicePortal = () => {
  return (
    <Stack className="p-4 shadow-sm p-3 mb-5 bg-body rounded d-flex flex-row justify-content-between align-items-start">
      <TypoMain text="Hii" coloredText="Sherlin" />
      <Button className="button button-outlined d-none d-md-block">
        MyFoods
      </Button>
    </Stack>
  );
};

export default ServicePortal;
