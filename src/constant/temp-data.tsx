/* eslint-disable no-unused-vars */
export const tempSlider = [
  {
    imgUrl:
      'https://file.hstatic.net/1000075078/file/familyday_desktop_4ea268afdf3d45648fc6fef381357122.jpg'
  },
  {
    imgUrl:
      'https://file.hstatic.net/1000075078/file/bennhau_web_64f71ffdb3354e8ebcb434a8eaf9f65a.jpg'
  },
  {
    imgUrl:
      'https://file.hstatic.net/1000075078/file/ansang9k_desktop_86bea6043e9246a382c464501bb88447.jpg'
  }
];

export const city = [
  {
    name: 'Tp Hồ Chí Minh',
    count: 72
  },
  {
    name: 'Hà Nội',
    count: 41
  },
  {
    name: 'Hải Phòng',
    count: 9
  },
  {
    name: 'Đà Nẵng',
    count: 5
  },
  {
    name: 'Tây Ninh',
    count: 2
  },
  {
    name: 'Nha Trang',
    count: 72
  },
  {
    name: 'Nghệ An',
    count: 4
  },
  {
    name: 'Huế',
    count: 1
  }
];

export const loadProvinces = async () => {
  const url = `https://provinces.open-api.vn/api/p`;
  try {
    const res = await fetch(url, {
      method: 'GET'
    });
    if (res.status === 200) {
      const json = await res.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }
};
