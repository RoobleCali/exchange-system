"use strict";
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 8894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);



const TransitionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    parent: {}
});
function useIsInitialRender() {
    const isInitialRender = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        isInitialRender.current = false;
    }, []);
    return isInitialRender.current;
}
function CSSTransition({ show , enter ="" , enterStart ="" , enterEnd ="" , leave ="" , leaveStart ="" , leaveEnd ="" , appear , unmountOnExit , tag ="div" , children , ...rest }) {
    const enterClasses = enter.split(" ").filter((s)=>s.length
    );
    const enterStartClasses = enterStart.split(" ").filter((s)=>s.length
    );
    const enterEndClasses = enterEnd.split(" ").filter((s)=>s.length
    );
    const leaveClasses = leave.split(" ").filter((s)=>s.length
    );
    const leaveStartClasses = leaveStart.split(" ").filter((s)=>s.length
    );
    const leaveEndClasses = leaveEnd.split(" ").filter((s)=>s.length
    );
    const removeFromDom = unmountOnExit;
    function addClasses(node, classes) {
        classes.length && node.classList.add(...classes);
    }
    function removeClasses(node, classes) {
        classes.length && node.classList.remove(...classes);
    }
    const nodeRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const Component = tag;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.CSSTransition, {
        appear: appear,
        nodeRef: nodeRef,
        unmountOnExit: removeFromDom,
        in: show,
        addEndListener: (done)=>{
            nodeRef.current.addEventListener("transitionend", done, false);
        },
        onEnter: ()=>{
            if (!removeFromDom) nodeRef.current.style.display = null;
            addClasses(nodeRef.current, [
                ...enterClasses,
                ...enterStartClasses
            ]);
        },
        onEntering: ()=>{
            removeClasses(nodeRef.current, enterStartClasses);
            addClasses(nodeRef.current, enterEndClasses);
        },
        onEntered: ()=>{
            removeClasses(nodeRef.current, [
                ...enterEndClasses,
                ...enterClasses
            ]);
        },
        onExit: ()=>{
            addClasses(nodeRef.current, [
                ...leaveClasses,
                ...leaveStartClasses
            ]);
        },
        onExiting: ()=>{
            removeClasses(nodeRef.current, leaveStartClasses);
            addClasses(nodeRef.current, leaveEndClasses);
        },
        onExited: ()=>{
            removeClasses(nodeRef.current, [
                ...leaveEndClasses,
                ...leaveClasses
            ]);
            if (!removeFromDom) nodeRef.current.style.display = "none";
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ref: nodeRef,
            ...rest,
            style: {
                display: !removeFromDom ? "none" : null
            },
            children: children
        })
    }));
}
function Transition({ show , appear , ...rest }) {
    const { parent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(TransitionContext);
    const isInitialRender = useIsInitialRender();
    const isChild = show === undefined;
    if (isChild) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CSSTransition, {
            appear: parent.appear || !parent.isInitialRender,
            show: parent.show,
            ...rest
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TransitionContext.Provider, {
        value: {
            parent: {
                show,
                isInitialRender,
                appear
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CSSTransition, {
            appear: appear,
            show: show,
            ...rest
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);


/***/ })

};
;