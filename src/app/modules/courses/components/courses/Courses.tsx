import { DataTable } from "./DataTable";

export function Courses() {
  return (
    <>
      <div>
        {/* Render TablesWidget9 and pass courses data */}

        <DataTable />

        <div className="d-flex flex-stack flex-wrap pt-10 justify-content-center">
          <ul className="pagination">
            <li className="page-item previous">
              <a href="#" className="page-link">
                <i className="previous"></i>
              </a>
            </li>

            <li className="page-item active">
              <a href="#" className="page-link">
                1
              </a>
            </li>

            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>

            <li className="page-item">
              <a href="#" className="page-link">
                3
              </a>
            </li>

            <li className="page-item">
              <a href="#" className="page-link">
                4
              </a>
            </li>

            <li className="page-item">
              <a href="#" className="page-link">
                5
              </a>
            </li>

            <li className="page-item">
              <a href="#" className="page-link">
                6
              </a>
            </li>

            <li className="page-item next">
              <a href="#" className="page-link">
                <i className="next"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
