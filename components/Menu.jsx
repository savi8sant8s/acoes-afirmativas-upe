import {
    Button,
    Navbar
} from "react-bootstrap"
import { useState } from "react"
import { getData } from "../services/filter-sheet"
import axios from "axios"

export function Menu() {
    const [sheet, setSheet] = useState();

    const onLoadSheet = (event) => {
        let file = event.target.files[0];
        setSheet(file);
    }

    const onAddSheet = async () => {
        if (sheet) {
            let data = await getData(sheet);
            await axios.post("/api/actions", data);
            window.location.reload();
        }
    }

    return (
        <Navbar className="small-padding bg-blue d-flex justify-content-between">
            <Navbar.Brand href="/">
                <label className="color-white cursor-pointer">Ações afirmativas da UPE</label>
            </Navbar.Brand>
        </Navbar>
    )
}

/*
{!sheet &&
                <input onChange={onLoadSheet} type="file" placeholder="Carregar planilha"></input>
            }
            {sheet &&
                <Button className="button" onClick={onAddSheet}>
                    Registrar respostas
                </Button>}
                */