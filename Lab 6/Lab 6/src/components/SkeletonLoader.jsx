function SkeletonLoader() {

  const skeletons = Array(8).fill(0);

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(4,1fr)",
      gap:"20px",
      padding:"20px"
    }}>

      {skeletons.map((_,index)=>(
        <div key={index}
        style={{
          height:"200px",
          background:"#eee",
          borderRadius:"10px",
          animation:"pulse 1.5s infinite"
        }}>
        </div>
      ))}

    </div>
  );
}

export default SkeletonLoader;