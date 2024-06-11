import CardList from '@/Components/CardList/CardList';
import Styles from './blogPage.module.css';
import Menu from '@/Components/Menu/Menu';
const BlogPage =()=>{
    return (
        <div className={Styles.container}>
        <h1 className={Styles.title}>Style Blog</h1>
        <div className={Styles.content}>
        <CardList />
        <Menu />
        </div>
        </div>
    )
}

export default BlogPage