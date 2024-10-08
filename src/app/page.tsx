import Image from 'next/image';
import Button from './ui/Buttons/Button';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import StoreButton from './ui/Buttons/StoreButton';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
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
