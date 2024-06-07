import  { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CovoiturageCard from "./CovoiturageCard.jsx";
import PropTypes from "prop-types";
import ReactDOM from "react-dom/client";

// Example items, to simulate fetching from another resources.


// eslint-disable-next-line react/prop-types
function Items({ currentItems }) {

    return (
        <>
            {currentItems &&
                currentItems.map((currentItem) => (
                    <>
                    <div className={"listCov"}>
                        <CovoiturageCard details={currentItem}/>
                    </div>
                        </>
                ))}
        </>
    );
}

// eslint-disable-next-line react/prop-types
export function CovoiturageDetails({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [Covoiturages,setCovoiturages]=useState([{}]);
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = Covoiturages.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Covoiturages.length / itemsPerPage);


    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Covoiturages.length;
        setItemOffset(newOffset);
    };
    useEffect(()=>{
        fetch('http://localhost:3000/Covoiturages',
            {
                method:"GET",
            }).then((response)=>{return response.json()})
            .then((data)=> {
                setCovoiturages(data);
            });
    });

    return (
        <>
            <Items currentItems={currentItems} />
            <div >
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={'pagination'} /* as this work same as bootstrap class */
                subContainerClassName={'pages pagination'} /* as this work same as bootstrap class */
                activeClassName={'active'}


            />
            </div>
        </>
    );

}

Items.propTypes = {
    currentItems: PropTypes.arrayOf(
        PropTypes.shape({
            départ: PropTypes.string,
            arrivé: PropTypes.string,
            AllerEtRetour: PropTypes.bool,
            heureDepart: PropTypes.string,
            heureRetour: PropTypes.string,
            NbrePlace: PropTypes.number,
            prix: PropTypes.number,
            quotidien: PropTypes.bool,
            JourDéb: PropTypes.string,
            JourFin: PropTypes.string,
            DateDébut: PropTypes.string,
            OwnerEmail: PropTypes.string,
        })
    ),

};

