'use client';

import Button from './ui/Buttons/Button';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import StoreButton from './ui/Buttons/StoreButton';
import EmailInput from './ui/Inputs/EmailInput';
import SelectInput from './ui/Inputs/SelectInput';
import SearchInput from './ui/Inputs/SearchInput';
import FileInput from './ui/Inputs/FileInput';
import MessageTextarea from './ui/Inputs/MessageTextarea';
import RadioButton from './ui/Inputs/RadioButton';
import Checkbox from './ui/Inputs/Checkbox';
import Switch from './ui/Inputs/Switch';
import { useState } from 'react';
import Carousel from './ui/Carousel';

export default function Home() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioChecked, setRadioChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Carousel></Carousel>
        <Button variant="filled" label="Filled Button" />
        <Button variant="rounded" label="Rounded Button" />
        <Button variant="outlined" label="Outlined Button" />
        <Button variant="outlined-rounded" label="Outlined Rounded Button" />
        <Button variant="rounded" label="YouTube" icon={<FaYoutube />} />
        <Button variant="outlined" label="Facebook" icon={<FaFacebook />} />
        <Button
          variant="outlined-rounded"
          label="Twitter"
          icon={<FaTwitter />}
        />
        <div className="grid grid-cols-2 gap-4 p-8">
          {/* Кнопки со светлым вариантом */}
          <StoreButton platform="appstore" variant="light" />
          <StoreButton platform="googleplay" variant="light" />
          <StoreButton platform="amazon" variant="light" />
          <StoreButton platform="windows" variant="light" />

          {/* Кнопки с темным вариантом */}
          <StoreButton platform="appstore" variant="dark" />
          <StoreButton platform="googleplay" variant="dark" />
          <StoreButton platform="amazon" variant="dark" />
          <StoreButton platform="windows" variant="dark" />
        </div>

        <div className="max-w-md mx-auto space-y-4 p-4">
          <EmailInput />
          <SelectInput />
          <SearchInput />
          <FileInput />
          <MessageTextarea />
        </div>

        <div className="space-y-4 p-8">
          {/* Checkbox */}
          <Checkbox
            label="Checkbox"
            checked={checkboxChecked}
            onChange={(checked) => setCheckboxChecked(checked)}
          />
          <Checkbox label="Checkbox (Disabled)" disabled />

          {/* Radio Button */}
          <RadioButton
            label="Radio"
            name="demo"
            checked={radioChecked}
            onChange={() => setRadioChecked(!radioChecked)}
          />
          <RadioButton label="Radio (Disabled)" name="demo" disabled />

          {/* Switch */}
          <Switch
            label="Switch"
            checked={switchChecked}
            onChange={(checked) => setSwitchChecked(checked)}
          />
          <Switch label="Switch (Disabled)" disabled />
        </div>
        <div>
          <Carousel></Carousel>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            sequi eaque quaerat id harum nemo reiciendis, at, facere eos
            recusandae maxime, laboriosam voluptate temporibus exercitationem
            magni fuga maiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            sequi eaque quaerat id harum nemo reiciendis, at, facere eos
            recusandae maxime, laboriosam voluptate temporibus exercitationem
            magni fuga maiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            sequi eaque quaerat id harum nemo reiciendis, at, facere eos
            recusandae maxime, laboriosam voluptate temporibus exercitationem
            magni fuga maiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            sequi eaque quaerat id harum nemo reiciendis, at, facere eos
            recusandae maxime, laboriosam voluptate temporibus exercitationem
            magni fuga maiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            sequi eaque quaerat id harum nemo reiciendis, at, facere eos
            recusandae maxime, laboriosam voluptate temporibus exercitationem
            magni fuga maiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            sequi eaque quaerat id harum nemo reiciendis, at, facere eos
            recusandae maxime, laboriosam voluptate temporibus exercitationem
            magni fuga maiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            sequi eaque quaerat id harum nemo reiciendis, at, facere eos
            recusandae maxime, laboriosam voluptate temporibus exercitationem
            magni fuga maiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            sequi eaque quaerat id harum nemo reiciendis, at, facere eos
            recusandae maxime, laboriosam voluptate temporibus exercitationem
            magni fuga maiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            sequi eaque quaerat id harum nemo reiciendis, at, facere eos
            recusandae maxime, laboriosam voluptate temporibus exercitationem
            magni fuga maiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore a
            sequi eaque quaerat id harum nemo reiciendis, at, facere eos
            recusandae maxime, laboriosam voluptate temporibus exercitationem
            magni fuga maiores dolorum.
          </p>
        </div>
      </main>
    </div>
  );
}
