export const Exemplo3 = () => {
  const array = [...Array(400)].map((u,i)=> i);
  
  return (
    <>
     <h3>Exemplo3</h3>

      {array.map((n) => (

        <p key={n}>teste {n}</p>

      ))}
    </>
  );
};
