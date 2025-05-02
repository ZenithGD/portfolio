/**
 * Nodes of a file system can either be
 * - Folders (which contain a list of nodes)
 * - Files (which are leaf nodes of the file system)
 */
import projectData from '@/data/projects.json'

type Tree<T> = T | Tree<T>[];

export interface FSNode extends Event {
    name: string; 
 }

export type LeafFSNode = FSNode & {
    date : Date
    type : "file" | "audio" | "image"
    lastModified : string
    link : string
}

export type FolderFSNode = FSNode & {
    children : FSNode[]
}

export type FS = Tree<FSNode>;

export function readProjects(): FS {
    
    return readFSNode(projectData)
}

function readFSNode(value: any): FSNode {

    // check folder or leaf node
    if ( Object.keys(value).includes("children") )
    {
        let folder: FolderFSNode = {
            name : value["name"] as string,
            children : [] as FSNode[]
        } as FolderFSNode

        console.log(Object.keys(value))
        value["children"].forEach((element: any) => {
            folder.children.push(readFSNode(element))
        });

        return folder
    }
    else {
        return value as LeafFSNode;
    }
}

export function isFolderFSNode(node: FSNode): node is FolderFSNode {
    return 'children' in node && Array.isArray(node.children);
}