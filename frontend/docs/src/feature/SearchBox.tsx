import * as React from 'react';
import {Input, InputGroup, InputLeftElement, Modal, ModalContent, ModalOverlay, VStack} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {AllNavigationTargets, NavTarget} from "./Navigation";
import _ from "lodash"
import {SearchEntry} from "./SearchEntry";

type SearchBoxProps = {
    isOpen: boolean,
    onClose: () => void,
}
export const SearchBox = ({isOpen, onClose}: SearchBoxProps) => {
    const pt: number = 7;

    const [navTargets, setNavTargets] = React.useState<NavTarget[]>()

    function searchPages(value: string) {

        if (value === "") {
            setNavTargets(undefined)
            return
        }

        let filtered_results = _.filter(
            AllNavigationTargets,
            function (target: NavTarget) {
                return _.includes(target.text?.toLocaleLowerCase(), value.toLocaleLowerCase())
            }
        )

        setNavTargets(filtered_results)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <InputGroup>
                    <InputLeftElement
                        children={<SearchIcon color="gray.300"/>}
                        pl={3}
                        pt={pt}
                        pb={pt}
                        />
                    <Input type="text" tabIndex={0} placeholder="Search the docs" pt={pt} pb={pt}
                           onChange={(e) => searchPages(e.target.value)}/>
                </InputGroup>
                {getResult(onClose, setNavTargets,navTargets)}
            </ModalContent>
        </Modal>
    );
};

function getResult(onClose: () => void, setNavTargets: (targets?: NavTarget[]) => void, navTargets?: NavTarget[]) {
    if (navTargets === undefined) {
        return null
    }

    return (<VStack mt={5} mb={5}>
        {navTargets.map((target: NavTarget, index) =>
            <SearchEntry navTarget={target} onClose={onClose} setNavTargets={setNavTargets} key={index}/>
        )}
    </VStack>)

}