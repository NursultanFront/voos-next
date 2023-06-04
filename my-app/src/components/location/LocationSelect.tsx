import React, { useState } from 'react';
import Select, { ActionMeta } from 'react-select';
import { Button } from '../ui/Buttons';

type IOptions = {
  value: string;
  label: string;
};

type Props = {
  selectCounrty: (value: string | null) => void;
};

const options: IOptions[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const LocationSelect = ({ selectCounrty }: Props) => {
  const [currentCountry, setCurrentCounrty] = useState<
    IOptions['value'] | null
  >(null);

  const onChange = (
    option: IOptions | null,
    actionMeta: ActionMeta<IOptions>
  ) => {
    if (option) setCurrentCounrty(option.value);
  };

  return (
    <div className="w-full">
      <Select onChange={onChange} options={options} className="mb-5" />
      <Button
        className="py-[9px] w-full text-center text-white bg-black rounded-lg"
        onClick={() => {
          selectCounrty(currentCountry);
        }}
      >
        Apply
      </Button>
    </div>
  );
};

export default LocationSelect;
