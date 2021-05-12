const sleep_ = (ms) =>
    new Promise((resolve/*, reject*/) => {
        setTimeout(resolve, ms);
    });

export default sleep_;
