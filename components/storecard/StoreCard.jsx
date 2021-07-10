import Card from './Card';
const dummy = [1, 2, 3, 4, 5, 6, 7];

function StoreCard() {
    return (
        <div
            className="flex overflow-x-scroll pb-10 hide-scroll-bar mt-10"
        >
            <div
                className="flex flex-nowrap gap-5 lg:ml-10 md:ml-20 mx-10 "
            >
                {dummy.map((el, id) => (
                    <Card key={id} />
                ))}
            </div>
        </div>
    )
}

export default StoreCard
