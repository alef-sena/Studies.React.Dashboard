/* eslint-disable react/no-unescaped-entities */
import { BellFilled, MailOutlined } from '@ant-design/icons';
import { Badge, Image, Space, Typography } from 'antd';

function AppHeader() {
	return <div className="AppHeader">
		<Image 
			width={40}
			src='https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj'
		>
		</Image>
		<Typography.Title>Sena's Dashboard</Typography.Title>
		<Space>
			<Badge count={9} dot>
				<MailOutlined style={{ fontSize: 24}} />
			</Badge>
			<Badge count={14}>
				<BellFilled style={{ fontSize: 24}} />
			</Badge>
		</Space>
	</div>;
}

export default AppHeader;
