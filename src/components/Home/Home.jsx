import { SearchBar } from "../SearchBar/SearchBar";

export function Home() {
    return (
        <div>
            <h1>Bienvenido al Stock Manager</h1>
            <p>Administra tu inventario de productos de manera eficiente y sencilla.</p>
            <SearchBar />
        </div>
    )
}
