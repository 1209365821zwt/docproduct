import React ,{Component}from 'react';
import Routerview from '../../router/Routerview'
import './index.css'
import Headercomment from '../../components/Header'
import Footerbar from '@/components/Footerbar'
import { Layout } from 'antd';
const { Header, Footer,  Content } = Layout;
class Homepage extends Component{
    render() {
      const {child} =this.props;
        return (
            <div className="main">
                  <Layout>
      <Header>
        <Headercomment></Headercomment>
      </Header>
      <Content>
      <Routerview routes={child}></Routerview>
      </Content>
      <Footer>
        <Footerbar></Footerbar>
      </Footer>
    </Layout>

            </div>
        );
    }
}
export default Homepage