
import './AppFooter.css'

export default function AppFooter(props){
    console.log(props)
    return (
        <div class="app_footer">
            <p>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                Props is a built in variable represents inputs to
                given as attributes to this tag called AppFooter when
                it is used in the App file.</p>
                <p>&copy: All Rights Reserved under -{props.company}-{props.year}</p>
        </div>

    )
    

}