'use client';
import { Button } from '../ui/Buttons';
import LocationIcon from '@/assets/header/LocationIcon';

type Props = {};

export const LocationHeader = (props: Props) => {
  return (
    <Button className="flex gap-1 items-center">
      <LocationIcon></LocationIcon>
      <div>Set location</div>
    </Button>
  );
};
