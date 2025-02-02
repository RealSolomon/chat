const GenderCheckbox = () => {
    return (
        <div className="flex gap-5">
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Male</span>
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-info"
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Female</span>
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-info"
                    />
                </label>
            </div>
        </div>
    );
};
export default GenderCheckbox;
