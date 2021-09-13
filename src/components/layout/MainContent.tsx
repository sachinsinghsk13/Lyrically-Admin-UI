import '../../styles/main-content.css';
export default function MainContent(props: any) {
    return <div style={{marginLeft: `${props.offsetWidth}px`}} className="main-content">
        <h1>Main content</h1>
    </div>
}