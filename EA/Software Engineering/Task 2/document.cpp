#include <iostream>
#include <string>

using namespace std;

/**
 * class definition for document game object. It contains
 * the variables and functions we expect our document to support.
 * 
 */
class Document {
    public:
        Document(const string name, const string description) {
            setName(name);
            setDescription(description);
            setIsChecked(false);
        }

        // player actions
        void readDocument() {
            setIsChecked(true);
        }

        // getter and setter for document's information
        string getName() const {
            return this->name;
        }
        string getDescription() const {
            return this->description;
        }
        bool getIsChecked() const {
            return this->isChecked;
        }

        void setName(const string name) {
            this->name = name;
        }
        void setDescription(const string description) {
            this->description = description;
        }
        void setIsChecked(bool isChecked) {
            this->isChecked = isChecked;
        }
        
    private:
        string name;
        string description;
        bool isChecked;
};

int main() {
    // declare document
    Document doc1("Clue1", "Open the box behind the door");
    cout << "Document 1 declared" << endl;
    cout << doc1.getName() << endl;
    cout << doc1.getDescription() << endl;
    cout << (doc1.getIsChecked() ? "Read" : "Not Yet Read") << endl;
    return 0;
}