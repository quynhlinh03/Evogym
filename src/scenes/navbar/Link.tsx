import AnchorLink from 'react-anchor-link-smooth-scroll';
type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  // hàm setSelectedPage nhận một tham số có tên là value, kiểu string, kiểu dữ liệu trả về void (không có giá trị trả về)
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '');
  //chuyển thành chữ thường
  // / /g biểu thức chính quy (regular expression) để tìm kiếm các khoảng trắng trong chuỗi.
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    transition duration-500 hover: text-primary-300
    `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
