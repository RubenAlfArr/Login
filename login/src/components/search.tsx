
import { useState } from 'react';
import { Button, Form} from 'react-bootstrap'

interface Props {
    onSearch: (search: string) => void;
  }

function Search({ onSearch }: Props) {

    const [searchName, setSearchName] = useState('');

    const handleSearch = () => {
        onSearch(searchName);
        console.log(searchName)
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Form className="d-flex">
          <Form.Control type="search"  className="me-2" value={searchName}  placeholder="Search Name" aria-label="Search"  onChange={(e) => setSearchName(e.target.value)} />
          <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
        </Form>
    </div>
    )
}

export default Search;
