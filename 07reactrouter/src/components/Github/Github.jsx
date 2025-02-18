import React from 'react';
import { useLoaderData } from 'react-router-dom';

// API Link:  https://api.github.com/users/maazshaikh2079

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/maazshaikh2079');
  return response.json();
}

function Github() {

  // const [data, setData] = React.useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/maazshaikh2079')
  //   .then((response) => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // }, []);

  const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt='' />
    </div>
  )
}

export default Github;
