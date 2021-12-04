import {
    Navbar
} from "react-bootstrap"

export function Menu() {

    return (
        <Navbar className="small-padding bg-blue d-flex justify-content-between">
            <Navbar.Brand href="/">
                <label className="color-white cursor-pointer">Ações afirmativas da UPE</label>
            </Navbar.Brand>
        </Navbar>
    )
}
