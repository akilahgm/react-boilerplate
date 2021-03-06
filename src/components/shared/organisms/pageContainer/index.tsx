import { Header } from '../../../';

interface IProps {
  children: React.ReactElement;
}
function PageContainer({ children }: IProps) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

export { PageContainer };
