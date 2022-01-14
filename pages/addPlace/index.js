import dynamic from 'next/dynamic';

export default function AddPlace() {
  const AddPlaceComponent = dynamic(
    () => import('../../components/AddPlaceComponent/index'),
    {
      ssr: false,
    }
  );

  return (
    <>
      <h1>hola</h1>
      <div>
        <AddPlaceComponent />
      </div>
    </>
  );
}
