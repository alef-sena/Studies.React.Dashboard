import { Typography } from 'antd';

function AppFooter() {
	return <div className="AppFooter">
		<Typography.Link href='tel:+5573998258315'>
			+5573998258315
		</Typography.Link>
		<Typography.Link href='https://www.google.com' target={'_blank'}>
			Privacy Policy
		</Typography.Link>
		<Typography.Link href='https://www.google.com' target={'_blank'}>
			Terms of Use
		</Typography.Link>
	</div>;
}

export default AppFooter;
